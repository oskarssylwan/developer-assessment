export const uniqueById = <T extends {id: any}>(arr: T[]): T[] =>
  Array.from((arr || []).reduce(
    (newsMap, newsPost) => newsMap.set(newsPost.id, newsPost),
    new Map<string, T>()
  ).values());
