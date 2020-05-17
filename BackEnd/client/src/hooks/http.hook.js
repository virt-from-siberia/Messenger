import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = useCallback(
        async (url, method = "GET", body = null, headers = {}) => {
            setLoading(true);
            try {
                if (body) {
                    body = JSON.stringify(body);
                    headers["Content-Type"] = "application/json";
                }
                const response = await fetch(url, {
                    method,
                    body,
                    headers,
                });

                const data = await response.json();

                //NOTE/: если поле ok не ок =)
                if (!response.ok) {
                    //NOTE/: если есть поле message вывести
                    throw new Error(data.message || "Что то пошло не так");
                }
                setLoading(false);

                //NOTE/: если все хорошо возврашяем data
                return data;
            } catch (err) {
                setLoading(false);
                setError(err.message);
                throw err;
            }
        },
        []
    );

    const clearError = useCallback(() => setError(null), []);

    return {
        loading,
        request,
        error,
        clearError,
    };
};
