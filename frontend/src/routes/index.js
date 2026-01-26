import Home from '../pages/Home';
import Attendance from '../pages/Attendance';
import Doctrine from '../pages/Doctrine';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/attendance', component: Attendance },
    { path: '/doctrine', component: Doctrine },
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes };