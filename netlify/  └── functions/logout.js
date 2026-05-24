exports.handler = async () => {
  // In a real app you'd clear cookies/session here
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, redirect: "/login.html" })
  };
};
