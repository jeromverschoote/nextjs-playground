export const usePost = async (id: string | undefined): Promise<any> => {
  const result = await fetch(`/api/post/${id}`);
  return result.json();
};
