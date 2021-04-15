export const useUser = async (id: string | undefined): Promise<any> => {
  const result = await fetch(`/api/user/${id}`);
  return result.json();
};
