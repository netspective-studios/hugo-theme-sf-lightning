---
title: Data structures
tags:
  - highlight
---


{{< tabs C Python >}}
{{< codetab >}}
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello vivek\n");
    return 0;
}
{{< /codetab >}}

{{< codetab >}}
print "Hello vivek2"
{{< /codetab >}}
{{< /tabs >}}






## JSON, XML
{{< multi-highlight >}}

  {{< highlight-item title="JSON" syntax="json" >}}

    { "name": "Alex", items: 23}

  {{</ highlight-item >}}

    {{< highlight-item title="XML" syntax="xml" >}}
      
      <node>
        <name>Alex</name>
        <items>3</items>
      </node>

    {{</ highlight-item >}}

{{</multi-highlight>}}



## YAML, Toml
{{< multi-highlight >}}

  {{< highlight-item title="Yaml" syntax="yaml" >}}
  build:
    useResourceCacheWhen: fallback
  {{</ highlight-item >}}

    {{< highlight-item title="Toml" syntax="toml" >}}
    [build]
      useResourceCacheWhen = "fallback"
    {{</ highlight-item >}}

{{</multi-highlight>}}

