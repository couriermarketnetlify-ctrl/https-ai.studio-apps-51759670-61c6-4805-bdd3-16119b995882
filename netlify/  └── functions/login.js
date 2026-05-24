exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  if (email === "test@courier.com" && password === "1234") {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, redirect: "/dashboard.html" })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false, message: "Invalid login" })
  };
};
