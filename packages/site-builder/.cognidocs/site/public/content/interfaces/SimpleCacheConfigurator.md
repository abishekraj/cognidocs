# SimpleCacheConfigurator

JS configs are great because they can compute a config on the fly, but the downside there is that it makes caching harder. Babel wants to avoid re-executing the config function every time a file is compiled, because then it would also need to re-execute any plugin and preset functions referenced in that config. To avoid this, Babel expects users of config functions to tell it how to manage caching within a config file.
