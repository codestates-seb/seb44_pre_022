package server.utils;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public class UriCreator {
  public static URI createUri(String path, long resourceId) {
    return UriComponentsBuilder.newInstance()
            .path(path+"/{resource-id}")
            .buildAndExpand(resourceId)
            .toUri();
  }
}
