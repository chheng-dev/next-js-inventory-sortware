import { toast } from "react-hot-toast";

export async function makeApiRequest(setLoading, url, data, resourceName, reset) {
  try {
    setLoading(true);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success(`New ${resourceName} created successfully! :)`);
    } else {
      toast.error('Something went wrong');
    }

    reset();
  } catch (err) {
    toast.error('An error occurred while making the request');
    console.error(err);
  } finally {
    setLoading(false);
  }
}
