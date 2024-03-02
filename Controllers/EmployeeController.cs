using Microsoft.AspNetCore.Mvc;

namespace cApNetDemoPage.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
