import { useContext } from "react"
import NotificationContext from "../NotificationContext";

const Notification = () => {
  const { message } = useContext(NotificationContext)
  console.log('what is message', message);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  if (!message) return null

  return (
    <div style={style}>
        {message}
    </div>
  )
}

export default Notification
