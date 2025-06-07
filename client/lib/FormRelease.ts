export class FormRelease {
  public static extract(e: React.FormEvent<HTMLFormElement>): FormData {
    e.preventDefault();
    return new FormData(e.currentTarget);
  }
}
