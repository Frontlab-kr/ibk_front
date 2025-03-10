type RequestFunction<T> = (...args: any[]) => Promise<T>;

export default class RequestCombiner {
  private cache: Map<string, Promise<any>>;

  constructor() {
    this.cache = new Map();
  }

  async request<T>(requestFn: RequestFunction<T>, cacheKey: string, ...args: any[]): Promise<T> {
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const requestPromise = requestFn(...args);
    this.cache.set(cacheKey, requestPromise);

    try {
      const result = await requestPromise;
      this.cache.delete(cacheKey);
      return result;
    } catch (error) {
      this.cache.delete(cacheKey);
      throw error;
    }
  }
}

// Usage
