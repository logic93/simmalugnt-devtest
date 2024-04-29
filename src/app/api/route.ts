const API_URL = "https://simmalugnt.proxy.beeceptor.com/login";

export async function POST() {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "" }),
    });

    // TODO
  } catch (error) {
    // TODO
    if (error instanceof Error) {
      throw new Error(error?.message);
    }
  }
}
