import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt';
import UserQuery from '../Query/UserQuery';

const userQuery = new UserQuery();
const JWT_SECRET = 'your_very_secure_and_long_random_string';
const opts = 
{
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};
passport.use(new Strategy(opts, async (jwt_payload, done) => 
    {
        try
        {
            const user = await userQuery.getUserById(jwt_payload.id);
            if(user)
                {
                    return done(null, user);
                }
            return done(null, false);
        }
        catch(error)
        {
            return done(error, false);
        }
    }));
export default passport;