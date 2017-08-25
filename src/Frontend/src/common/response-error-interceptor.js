import {errorNotification} from "./notifier";

export default function (request, next) {
    next(function (response) {
        if (!response.ok) {
            console.log(request, response, SUPLA_TRANSLATIONS);
            const message = (response.body && response.body.message)
                || SUPLA_TRANSLATIONS['Error when communicating the server. Try again in a while.'];
            errorNotification(SUPLA_TRANSLATIONS['Error'], message);
        }
    });
};