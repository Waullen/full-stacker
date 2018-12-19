import test from 'ava';
import superKoa from 'superkoa';
import app from '../app';

test.cb("first test", t => {
    superKoa(app)
        .get("/users/")
        .expect(200, function (err, res) {
            const user = JSON.parse(res.text);
            t.is(user.age, 23);
            t.end();
        });
});
