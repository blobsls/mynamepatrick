const proxyHandler: ProxyHandler<any> = {
    get(target, prop, receiver) {
        if (prop === 'fetch') {
            return async (input: RequestInfo, init?: RequestInit) => {
                const response = await target[prop](input, init);
                const clonedResponse = response.clone();
                const contentType = clonedResponse.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await clonedResponse.json();
                    return new Response(JSON.stringify(data), {
                        status: clonedResponse.status,
                        statusText: clonedResponse.statusText,
                        headers: clonedResponse.headers
                    });
                }
                return response;
            };
        }
        return Reflect.get(target, prop, receiver);
    }
};

const proxy = new Proxy(window, proxyHandler);

(window as any).fetch = proxy.fetch;
