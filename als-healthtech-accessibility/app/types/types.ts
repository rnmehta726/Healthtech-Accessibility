// src/types/types.ts
export type RootStackParamList = {
  Home: { newPage?: { id: number; title: string; buttons: string[] } };
  EditPage: undefined;
  DynamicPage: { pageId: number; title: string; buttons: string[] };
};
