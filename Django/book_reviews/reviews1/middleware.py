import logging 
from django.utils.deprecation import MiddlewareMixin

logger=logging.getLogger(__name__)

class RequestLogMiddleware(MiddlewareMixin):
    def process_request(self,request):
        logger.info(f"Handling request for {request.path} by {request.method}")

    def process_response(self,request,response):
        logger.info(f"Sending response {response.status_code} for {request.path}")
        return response
    
    def process_exception(self,request, exception):
        logger.error(f"Exception {str(exception)} occurred during processing request for {request.path}")