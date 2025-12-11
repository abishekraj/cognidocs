# DiagnosticFeatureShape

Shape of the linked editing feature

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `diagnostics` | `{
        /**
        * Asks the client to refresh all diagnostics provided by this server by
        * pull for the corresponding documents again.
        */
        refresh(): void;
        /**
        * Installs a handler for the document diagnostic request.
        *
        * @param handler The corresponding handler.
        */
        on(handler: ServerRequestHandler<DocumentDiagnosticParams, DocumentDiagnosticReport, DocumentDiagnosticReportPartialResult, DiagnosticServerCancellationData>): Disposable;
        /**
         * Installs a handler for the workspace diagnostic request.
         *
         * @param handler The corresponding handler.
         */
        onWorkspace(handler: ServerRequestHandler<WorkspaceDiagnosticParams, WorkspaceDiagnosticReport, WorkspaceDiagnosticReportPartialResult, DiagnosticServerCancellationData>): Disposable;
    }` | No | - |