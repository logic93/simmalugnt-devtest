const API_URL = "https://simmalugnt.proxy.beeceptor.com/login";

export async function POST(formData: FormData) {
  const rawFormData = Object.fromEntries(formData);

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    // TODO
  } catch (error) {
    // TODO
    throw new Error(error?.message);
  }
}
