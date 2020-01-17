import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;

interface ModelEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface ApiResource {
  id?: number;
}

interface ModelSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface ModelArributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export class Model<T extends ApiResource> {
  constructor(
    private attributes: ModelArributes<T>,
    private events: ModelEvents,
    private sync: ModelSync<T>
  ) {}

  get get() {
    return this.attributes.get;
  }
  set(update: T) {
    this.attributes.set(update);
    this.trigger("change");
  }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without id");
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
