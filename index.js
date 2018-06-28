import express from 'express';
import Schema from './schema';
import { json } from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', json(), graphqlExpress({ schema: Schema }));

app.listen(app.get('port'), () => {
    console.log(`gotcha! server is listening on port ${app.get('port')}`);
});