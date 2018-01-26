
module.exports = function(params){

    if(!params.Rest){
        return;
    }

    var Config = (function(){

        /**
         * Name of database
         * @property _database
         * @type {String}
         * @private
         */
        var _database = 'LearnNode';
        var _replset = false;

        /**
         * Options to connect to mongodb
         * @property options
         * @type {Object}
         */
        var options = {
            db: {  safe: true, strict: false, native_parser:true },
            server: { poolSize: 15 },
            replset: { rs_name: 'LearnNode', strategy: 'ping'},
            user: 'userMongo',
            pass: 'passMongo'
        };

        options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };

        /**
         * List of servers of replicaset
         * @property servers
         * @type {Object}
         */
        var servers = {
            a:{
                host: 'localhost',
                user: 'userMongo',
                pass: 'passMongo',
                db: _database,
                port:27017
            },
            b:{
                host: 'localhost',
                user: 'userMongo',
                pass: 'passMongo',
                db:_database,
                port:27017
            },
            c:{
                host: 'localhost',
                user: 'userMongo',
                pass: 'passMongo',
                db:_database,
                port:27017
            }
        };

        if(_replset) {
            servers.a.connect = 'mongodb://'+servers.a.user+':'+servers.a.pass+'@'+servers.a.host+':'+servers.a.port+'/'+servers.a.db;
            servers.b.connect = 'mongodb://'+servers.b.user+':'+servers.b.pass+'@'+servers.b.host+':'+servers.b.port;
            servers.c.connect = 'mongodb://'+servers.c.user+':'+servers.c.pass+'@'+servers.c.host+':'+servers.c.port;

            servers.connectString = servers.a.connect+','+servers.b.connect+','+servers.c.connect;
        }
        else {
            servers.a.connect = 'mongodb://'+servers.a.user+':'+servers.a.pass+'@'+servers.a.host+':'+servers.a.port+'/'+servers.a.db;
            servers.connectString = servers.a.connect
        }

        return {
            db:options,
            servers:servers
        };
    })();

    return Config;
};