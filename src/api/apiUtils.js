export async function handleResponse(response) {
  if (response.ok) return response;

  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export function parseLinkHeader(linkHeader) {
  if (!linkHeader) {
    return null;
  }
  return Object.fromEntries(
    linkHeader
      .split(", ")
      .map((header) => header.split("; "))
      .map((header) => [
        header[1].replace(/"/g, "").replace("rel=", ""),
        header[0].substring(header[0].indexOf("?") + 1, header[0].length - 1),
      ])
  );
}
