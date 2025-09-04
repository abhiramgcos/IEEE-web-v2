# Dockerfile

# ---- Stage 1 Install Dependencies ----
# This stage installs all npm dependencies. The result is cached to speed up
# future builds if your package.json hasn't changed.
FROM node20-alpine AS deps
WORKDIR app

# Copy package.json and the lock file
COPY package.json package-lock.json .

# Install all dependencies, including devDependencies needed for the build
RUN npm install


# ---- Stage 2 Build the Application ----
# This stage takes the installed dependencies and your source code to
# create a production build of your Next.js app.
FROM node20-alpine AS builder
WORKDIR app

# Copy dependencies from the previous stage
COPY --from=deps appnode_modules .node_modules

# Copy the rest of your application source code
COPY . .

# FIX Add execute permission for the 'next' command script.
# This is the crucial step to solve the Permission denied error when
# your source files come from a network share.
RUN chmod +x appnode_modules.binnext

# Run the production build
RUN npm run build


# ---- Stage 3 Production Runner ----
# This is the final, lean image that will run your application. It only
# copies the necessary built files from the 'builder' stage.
FROM node20-alpine AS runner
WORKDIR app

# Set the environment to production
ENV NODE_ENV=production

# Copy the essential files for running the app from the 'builder' stage
COPY --from=builder apppublic .public
COPY --from=builder app.next ..next
COPY --from=builder appnode_modules .node_modules
COPY --from=builder apppackage.json .package.json

# Expose the port that Next.js runs on
EXPOSE 3000

# The command to start the production server
CMD [npm, start]