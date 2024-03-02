using Microsoft.AspNetCore.Mvc;

namespace cApNetDemoPage.Controllers
{
    public class PicturesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
