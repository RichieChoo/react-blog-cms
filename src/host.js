/**
 * Created by Richie on 2018/4/27
 */
let host = 'http://localhost:8888';

const env = process.env.NODE_ENV || 'development';
if (env === 'production') {
    //production-api-host
    host = 'http://';
}
export default host;