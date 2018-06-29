import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { Schema } from './authors/schema';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

const app = express();

app.set('port', process.env.PORT || 3000);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongodb/graphQlTest')
        .then(() => console.log('connected!'))
        .catch(console.error);

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', json(), graphqlExpress({ schema: Schema }));

app.listen(app.get('port'), () => {
    console.log(`gotcha! server is listening on port ${app.get('port')}`);
});