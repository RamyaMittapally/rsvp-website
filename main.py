from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

rsvp_list = []

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/submit")
async def submit(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    attending: str = Form(...)
):
    rsvp_list.append({
        "name": name,
        "email": email,
        "attending": attending
    })

    return templates.TemplateResponse("index.html", {"request": request})

# 🔐 ADMIN PAGE
@app.get("/admin", response_class=HTMLResponse)
async def admin(request: Request, password: str = ""):
    if password != "ramya123":   # Change this password!
        return HTMLResponse("""
            <h2>Admin Login</h2>
            <form>
                <input type='password' name='password' placeholder='Enter Password'/>
                <button type='submit'>Login</button>
            </form>
        """)
    
    return templates.TemplateResponse(
        "admin.html",
        {"request": request, "rsvps": rsvp_list}
    )