using Microsoft.AspNetCore.Mvc;

namespace cApNetDemoPage.Controllers
{
    public class YouTubeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
