export interface LoginOptions {
  onSuccess?: () => void;
}

export declare function mountReactLogin(
  element: HTMLElement,
  options?: LoginOptions
): () => void;