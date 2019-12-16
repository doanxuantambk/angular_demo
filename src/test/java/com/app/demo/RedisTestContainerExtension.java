
package com.app.demo;

import org.junit.jupiter.api.extension.BeforeAllCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.testcontainers.containers.GenericContainer;

import java.util.concurrent.atomic.AtomicBoolean;

public class RedisTestContainerExtension implements BeforeAllCallback {
    private static AtomicBoolean started = new AtomicBoolean(false);

    @Override
    public void beforeAll(ExtensionContext extensionContext) throws Exception {
        if(!started.get()) {
            GenericContainer redis =
                new GenericContainer("redis:5.0.6")
                    .withExposedPorts(8081);
            redis.start();
            System.setProperty("redis.test.server", "redis://" + redis.getContainerIpAddress() + ":" + redis.getMappedPort(8081));
            started.set(true);
        }
    }
}
