import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setTypeNotification } from "../../redux/admin/notification/notificationSlice"



export const sendNotificationType = (type) => {
    const request = {
        data: {
            type: type
        },
        onSuccess: (res) => {
            console.log("res notification", res.data)
            if (res.success) {
                new Notification(res.data.title, {
                    body: res.data.message,
                    icon: 'https://cta.corporatetransparencyfiling.com/favicon.ico',
                    dir: 'ltr'
                })
            }
        },
        onFail: (err) => {
            console.log("err notification", err)
        }
    }
    return request
}