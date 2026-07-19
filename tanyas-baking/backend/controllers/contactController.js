// In-memory store for demo purposes. Swap for a real database in production.
const submissions = [];

function submitContact(req, res) {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  const entry = {
    id: Date.now().toString(),
    name,
    email,
    phone: phone || '',
    message,
    createdAt: new Date().toISOString()
  };

  submissions.push(entry);
  console.log('New enquiry received:', entry);

  // In production: send an email/notification here (e.g. via nodemailer).
  res.status(201).json({ success: true, message: 'Thanks! We will get back to you soon.', entry });
}

function getSubmissions(req, res) {
  res.json(submissions);
}

module.exports = { submitContact, getSubmissions };
