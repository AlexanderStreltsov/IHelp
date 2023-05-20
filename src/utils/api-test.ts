export const query = async (username: string) => {
  try {
    const res = await fetch(`/user/${username}`);
    if (!res.ok) {
      throw new Error('oops');
    }

    return await res.json();
  } catch (err: any) {
    console.log(err.message);
  }
};
