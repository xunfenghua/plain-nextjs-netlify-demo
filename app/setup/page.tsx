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
                  Prisma Console
                </a>
                .
              </li>
              <li>
                Click <strong>New project</strong> to create a new project.
              </li>
              <li>
                Enter a name for your project in the <strong>Name</strong> field. (Remember the value you provide since
                you will need it in <strong>Step 3</strong>).
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
            </ol>
          </div>

          {/* Step 2 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">2. Add the Prisma Integration Token to Netlify</h2>
            <p className="text-gray-700 mt-2">
              When you create the site with this template, you already installed the{" "}
              <a href="" target="_blank">
                Prisma Postgres extension
              </a>
              . Next, you need to copy Prisma s Integration Token into the extension.
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-700">
              <li>
                In the{" "}
                <a href="https://console.prisma.io" className="text-blue-600 hover:underline" target="_blank">
                  Prisma Console
                </a>
                , click the <strong>Integrations</strong> tab in the left-hand sidenav.
              </li>
              <li>
                In the <strong>Configure Team settings</strong> section, click the{" "}
                <strong>Generate integration token</strong> button.
              </li>
              <li>
                Copy the generated token, you now need to add it to the team-level extension configuration in your
                Netlify account as described in the next step.
              </li>
              <li>
                In your Netlify account, click the <strong>Extensions</strong> tab in the left-hand sidenav and navigate
                to the installed <strong>Prisma Postgres</strong> extension. Then find the text field for the{" "}
                <strong>Integration token</strong>, paste the token from the previous step into it and click{" "}
                <strong>Save</strong>.
              </li>
            </ol>
          </div>

          {/* Step 3 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Connect Netlify site with Prisma Postgres instance
            </h2>
            <p className="text-gray-700 mt-2">
              In this step, you will connect your Netlify site with the Prisma Postgres instance you just created.
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-700">
              <li>
                In your Netlify Dashboard, click on the <strong>Sites</strong> item in the left-hand sidenav and click
                on the site that was deployed with this template.
              </li>
              <li>
                In the <strong>Extensions</strong> section, click on <strong>Prisma Postgres</strong>.
              </li>
              <li>
                Find the <strong>Project</strong> dropdown and select the one project created in <strong>Step 1</strong>{" "}
                before.
              </li>
              <li>
                In the next two dropdowns for <strong>Production environment</strong> and{" "}
                <strong>Preview environment</strong> select <strong>Development</strong>. Then click{" "}
                <strong>Save</strong>. (At this stage, you can theoretically connect different database instances to the
                different environments in Netlify. For the purpose of this demo, we are just connecting both
                environments to the <strong>Development</strong> database in Prisma Console).
              </li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">4. Migrate and seed the database</h2>
            <p className="text-gray-700 mt-2">
              In this section, you need to migrate the database by running a Prisma CLI command. This is best done from
              your local machine.
            </p>
            <p className="text-gray-700 mt-2">
              First, clone the Git repo that Netlify created in your account, navigate into it and install dependencies
              (do not forget to replace the <code>USERNAME</code> placeholder with your actual username, and potentially
              adjust the name of the repo if you gave it a different name):
            </p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
              git clone git@github.com:USERNAME/nextjs-prisma-postgres-starter.git
              <br />
              cd nextjs-prisma-postgres-starter
              <br />
              npm install
            </pre>
            <p className="text-gray-700 mt-2">
              Create a <code>.env</code> file and add the <code>DATABASE_URL</code> environment variable to it (you can
              find the value for that in the project you created in <strong>Step 1</strong> in the{" "}
              <a href="https://console.prisma.io" className="text-blue-600 hover:underline" target="_blank">
                Prisma Console
              </a>
              ):
            </p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
              # .env <br></br>
              DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=ey..."
            </pre>
            <p className="text-gray-700 mt-2">
              You can now migrate your database and apply the schema defined in <code>prisma/schema.prisma</code> with
              this command:
            </p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">
              npx prisma migrate dev --name init
            </pre>
            <p className="text-gray-700 mt-2">Finally, run this command to seed the database with some sample data:</p>
            <pre className="mt-4 p-4 bg-gray-900 text-white text-sm rounded-lg overflow-auto">npx prisma db seed</pre>
          </div>

          {/* Step 5 */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">5. Re-deploy the site in Netlify</h2>
            <p className="text-gray-700 mt-2">
              Your site is now fully configured to load data from the Prisma Postgres database you just created, the
              last thing you need to do is re-deploy the site via the Netlify Dashboard.
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-700">
              <li>
                In your Netlify Dashboard, click on the <strong>Sites</strong> item in the left-hand sidenav and click
                on the site that was deployed with this template.
              </li>
              <li>
                Find the <strong>Project</strong> dropdown and select the one project created in <strong>Step 1</strong>{" "}
                before.
              </li>
              <li>
                Click on the <strong>Deploys</strong> tab on the left, click the <strong>Trigger deploy</strong> button,
                and finally click <strong>Clear cache and deploy site</strong>.
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              {" "}
              Once the deployment is ready, you can click on <strong>Open production deploy</strong> and use the app 🎉
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
