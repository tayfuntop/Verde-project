import { baseUrl } from './endpoint';

export const Request = (
    endPointsName,
    requestMethod,
    target,
    endPointsName2,
    sendBody,
    headers = { 'Content-Type': 'application/json' },
) => {

    return new Promise((resolve, reject) => {

        fetch(baseUrl + endPointsName + (target === undefined ? "" : "/" + target) + (endPointsName2 === undefined ? "" : "/" + endPointsName2),
            { headers, method: requestMethod, body: sendBody === undefined ? null : JSON.stringify(sendBody) }
        )
            .then(response => convertJson(response))
            .then(data => {
                resolve(data);
            })
            .catch(e => {
                reject(e);
            });
    });
};

const convertJson = async (response) => {
    const success = response.status === 200 || response.status === 201;
    const data = success ? await response.json() : null;
    return { data, success };
};