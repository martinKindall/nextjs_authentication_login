import Head from 'next/head'
import withSession from "../lib/session";

export default function Home({ user }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h2>Welcome to the home page {user.username}!</h2>
    </div>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: { user: req.session.get("user") },
  };
});
