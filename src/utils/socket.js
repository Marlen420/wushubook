import { useSelector } from 'react-redux';
import io from 'socket.io-client'

const socket = io('http://192.168.0.142:5000');

export default socket