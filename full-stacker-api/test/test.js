import test from 'ava';
import superKoa from 'superkoa';
import app from '../app';

test.cb("Hello full stacker", t => {
    superKoa(app)
        .get("/")
        .expect(200, function (err, res) {
            t.is(res.text, 'Hello full stacker!');
            t.end();
        });
});
