export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md border border-gray-300 overflow-y-auto h-[90vh]">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Prisma Postgres Setup Guide</h1>

          <p className="text-gray-700">
            Congratulations, you just deployed the Next.js + Prisma Postgres starter template 🎉
          </p>

          <p className="text-gray-700 mt-2">To make the app work, you need to connect it to a database.</p>

          {/* Step 1 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">1. Create a Prisma Postgres instance</h2>
            <p className="text-gray-700 mt-2">
              Create a Prisma Postgres database instance using
              <a href="https://console.prisma.io" className="text-blue-600 hover:underline" target="_blank">
                Prisma Data Platform
              </a>
              .
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-700">
              <li>
                Go to{" "}
                <a href="https://console.prisma.io" className="text-blue-600 hover:underline" target="_blank">
                  Prisma Data Platform
                </a>
                .
              </li>
              <li>
                Click <strong>New project</strong> to create a new project.
              </li>
              <li>
                Enter a name for your project in the <strong>Name</strong> field.
              </li>
              <li>
                Inside the <strong>Prisma Postgres</strong> section, click <strong>Get started</strong>.
              </li>
              <li>
                Choose a region close to your location from the <strong>Region</strong> dropdown.
              </li>
              <li>
                Click <strong>Create project</strong> to set up your database.
              </li>
              <li>
                In the <strong>Set up database access</strong> section, copy the <code>DATABASE_URL</code>. You will use
                this in the next steps.
              </li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Connect your Prisma Postgres instance with Netlify
            </h2>
            <p className="text-gray-700 mt-2">Create an environment file for your database configuration:</p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">touch .env</pre>
            <p className="text-gray-700 mt-4">
              Then, add your database URL inside the <strong>.env</strong> file:
            </p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
              DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=PRISMA_POSTGRES_API_KEY"
            </pre>
          </div>

          {/* Step 3 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">3. Migrate the database</h2>
            <p className="text-gray-700 mt-2">Run the following command to set up your database schema:</p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
              npx prisma migrate dev --name init
            </pre>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 hover:underline">
                Expand for <code>yarn</code>, <code>pnpm</code> or <code>bun</code>
              </summary>
              <pre className="mt-2 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
                # Using yarn yarn prisma migrate dev --name init # Using pnpm pnpm prisma migrate dev --name init #
                Using bun bun prisma migrate dev --name init
              </pre>
            </details>
          </div>

          {/* Step 4 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">4. Seed the database</h2>
            <p className="text-gray-700 mt-2">Add initial data to your database:</p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">npx prisma db seed</pre>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 hover:underline">
                Expand for <code>yarn</code>, <code>pnpm</code> or <code>bun</code>
              </summary>
              <pre className="mt-2 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
                # Using yarn yarn prisma db seed # Using pnpm pnpm prisma db seed # Using bun bun prisma db seed
              </pre>
            </details>
          </div>

          {/* Step 5 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">5. Run the app</h2>
            <p className="text-gray-700 mt-2">Start the development server:</p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">npm run dev</pre>
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 hover:underline">
                Expand for <code>yarn</code>, <code>pnpm</code> or <code>bun</code>
              </summary>
              <pre className="mt-2 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
                # Using yarn yarn dev # Using pnpm pnpm run dev # Using bun bun run dev
              </pre>
            </details>
            <p className="text-gray-700 mt-4">
              Once the server is running, visit <code>http://localhost:3000</code> to start using the app.
            </p>
          </div>

          {/* Step 6 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">6. Deploy to Netlify</h2>
            <p className="text-gray-700 mt-2">
              Use the{" "}
              <a
                href="https://www.netlify.com/integrations/prisma"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Prisma Postgres extension
              </a>{" "}
              for Netlify.
            </p>
            <a
              href="https://app.netlify.com/start/deploy?repository=https://github.com/nikolasburk/plain-nextjs-netlify-demo"
              target="_blank"
            >
              <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" className="mt-4" />
            </a>
          </div>

          {/* Completion Message */}
          <div className="mt-8 border-t pt-6">
            <p className="text-lg text-gray-900 font-medium">🎉 You’re all set!</p>
            <p className="text-gray-700">Your database is now connected. You can start using the app normally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
