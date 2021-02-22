## CICD pipeline execution:

Go to,   **CI/CD -> Pipelines -> "Run Pipeline"**

###  For production:

set Variable, **PLATFORM = production -> "Run Pipeline"**

This will use the content from production miniflux database and will push the content to production Healthcare IT Miniflux RSS repository's content-auto directory. 

###  For experimental:

click on  **"Run Pipeline"**  ( Without any variables )

This will use the content from production miniflux database and will push the content to experimental Healthcare IT Miniflux RSS repository's content-auto directory.