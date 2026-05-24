exports.handler = async (event) => {
  const { name, email, password } = JSON.parse(event.body);

  // Normally you'd save to a database here
  console.log("New user:", name, email);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, redirect: "/dashboard.html" })
  };
};
