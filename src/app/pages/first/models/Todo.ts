export class Todo {
  title: string;
  enabled: boolean;
  createdAt: Date;

  constructor(title: string) {
    this.title = title;
    this.enabled = true;
    this.createdAt = new Date();
  }

  toString(): string {
    return `{"title": "${this.title}", "enabled": "${this.enabled}"}`;
  }
}
