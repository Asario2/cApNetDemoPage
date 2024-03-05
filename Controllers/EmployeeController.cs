
using Microsoft.AspNetCore.Mvc;
using data.employee;

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
