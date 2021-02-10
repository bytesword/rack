import { APIGatewayProxyEvent, Context } from "aws-lambda";

export const logApiExecution = (
    event: APIGatewayProxyEvent,
    context: Context
) => {
    console.info("API Gateway Event: ", event);
    console.info("Execution context: ", context);
}