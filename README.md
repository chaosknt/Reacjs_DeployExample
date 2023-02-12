# File to  json project

Convert an upload file to Json.

## npm Packages

### xlsx ### office-ui-fabric-react

## Available extensions

"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"


### Considerations

If a file have 2000 rows or more, the conversation can take a few seconds



### Deploy:

To prevent 404 error on js files after deploy do: </br>

From `/docs/index.html` change all href that they aren't a CDN from the current value, to new ./ </br>

example:

from ``` <link rel="icon" href=".favicon.ico" /> or <link rel="icon" href="./repo-name/favicon.ico" /> ``` </br>
to ``` <link rel="icon" href="./favicon.ico" /> ``` </br>