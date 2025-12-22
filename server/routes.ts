import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

// Quote form validation schema
const quoteFormSchema = z.object({
  moveType: z.string(),
  fromZip: z.string(),
  fromCity: z.string(),
  toZip: z.string(),
  toCity: z.string(),
  date: z.string().optional(),
  flexibility: z.string(),
  surfaceArea: z.number(),
  rooms: z.number(),
  people: z.number(),
  floorFrom: z.string().optional(),
  floorTo: z.string().optional(),
  elevatorFrom: z.string(),
  elevatorTo: z.string(),
  parkingFrom: z.string(),
  parkingTo: z.string(),
  packingLevel: z.string(),
  disassembly: z.boolean(),
  assembly: z.boolean(),
  cleaning: z.boolean(),
  storage: z.boolean(),
  insuranceValue: z.string(),
  salutation: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  contactPreference: z.string(),
  remarks: z.string().optional(),
});

// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  host: "mail.toov.com.tr",
  port: 587,
  secure: false,
  auth: {
    user: "no-reply@toov.com.tr",
    pass: "Toov1234@@NoRply",
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Quote request endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      const formData = quoteFormSchema.parse(req.body);
      
      // Generate unique quote ID
      const quoteId = `QM-${Math.floor(Math.random() * 90000) + 10000}`;
      
      // Prepare admin email content
      const adminEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .section-title { color: #3b82f6; font-weight: bold; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #6b7280; display: inline-block; width: 180px; }
            .value { color: #111827; }
            .highlight { background: #dbeafe; padding: 2px 6px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚚 New Quote Request</h1>
              <p style="margin: 10px 0 0 0; font-size: 20px;">Request ID: <span class="highlight">${quoteId}</span></p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">📍 Move Details</div>
                <div class="field"><span class="label">Type:</span> <span class="value">${formData.moveType === 'private' ? 'Private Move' : 'Business Move'}</span></div>
                <div class="field"><span class="label">From:</span> <span class="value">${formData.fromZip} ${formData.fromCity}</span></div>
                <div class="field"><span class="label">To:</span> <span class="value">${formData.toZip} ${formData.toCity}</span></div>
                <div class="field"><span class="label">Date:</span> <span class="value">${formData.date || 'Not specified'}</span></div>
                <div class="field"><span class="label">Flexibility:</span> <span class="value">${formData.flexibility}</span></div>
              </div>
              
              <div class="section">
                <div class="section-title">🏠 Property Information</div>
                <div class="field"><span class="label">Surface Area:</span> <span class="value">${formData.surfaceArea} m²</span></div>
                <div class="field"><span class="label">Rooms:</span> <span class="value">${formData.rooms}</span></div>
                <div class="field"><span class="label">People:</span> <span class="value">${formData.people}</span></div>
                <div class="field"><span class="label">Origin Floor:</span> <span class="value">${formData.floorFrom || 'N/A'}</span></div>
                <div class="field"><span class="label">Destination Floor:</span> <span class="value">${formData.floorTo || 'N/A'}</span></div>
                <div class="field"><span class="label">Origin Elevator:</span> <span class="value">${formData.elevatorFrom}</span></div>
                <div class="field"><span class="label">Destination Elevator:</span> <span class="value">${formData.elevatorTo}</span></div>
                <div class="field"><span class="label">Origin Parking:</span> <span class="value">${formData.parkingFrom}</span></div>
                <div class="field"><span class="label">Destination Parking:</span> <span class="value">${formData.parkingTo}</span></div>
              </div>
              
              <div class="section">
                <div class="section-title">📦 Services Requested</div>
                <div class="field"><span class="label">Packing Level:</span> <span class="value">${formData.packingLevel}</span></div>
                <div class="field"><span class="label">Disassembly:</span> <span class="value">${formData.disassembly ? '✅ Yes' : '❌ No'}</span></div>
                <div class="field"><span class="label">Assembly:</span> <span class="value">${formData.assembly ? '✅ Yes' : '❌ No'}</span></div>
                <div class="field"><span class="label">Cleaning:</span> <span class="value">${formData.cleaning ? '✅ Yes' : '❌ No'}</span></div>
                <div class="field"><span class="label">Storage:</span> <span class="value">${formData.storage ? '✅ Yes' : '❌ No'}</span></div>
                <div class="field"><span class="label">Insurance:</span> <span class="value">${formData.insuranceValue}</span></div>
              </div>
              
              <div class="section">
                <div class="section-title">👤 Customer Information</div>
                <div class="field"><span class="label">Name:</span> <span class="value">${formData.salutation}. ${formData.firstName} ${formData.lastName}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value">${formData.email}</span></div>
                <div class="field"><span class="label">Phone:</span> <span class="value">${formData.phone}</span></div>
                <div class="field"><span class="label">Contact Preference:</span> <span class="value">${formData.contactPreference}</span></div>
                ${formData.remarks ? `<div class="field"><span class="label">Remarks:</span> <span class="value">${formData.remarks}</span></div>` : ''}
              </div>
            </div>
          </div>
        </body>
        </html>
      `;
      
      // Prepare customer confirmation email
      const customerEmailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .highlight { background: #dbeafe; padding: 8px 12px; border-radius: 6px; font-weight: bold; display: inline-block; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Quote Request Confirmed</h1>
            </div>
            
            <div class="content">
              <div class="box">
                <p>Dear ${formData.firstName} ${formData.lastName},</p>
                <p>Thank you for choosing QuickMove AG! We have received your premium relocation quote request.</p>
                <p style="text-align: center; margin: 20px 0;">
                  Your Request ID: <span class="highlight">${quoteId}</span>
                </p>
                <p><strong>Move Details:</strong></p>
                <ul>
                  <li>From: ${formData.fromZip} ${formData.fromCity}</li>
                  <li>To: ${formData.toZip} ${formData.toCity}</li>
                  <li>Date: ${formData.date || 'To be confirmed'}</li>
                </ul>
              </div>
              
              <div class="box">
                <h3 style="color: #3b82f6; margin-top: 0;">What happens next?</h3>
                <p>✅ Our team will review your request within 24 hours</p>
                <p>✅ We'll contact you via ${formData.contactPreference} with a detailed quote</p>
                <p>✅ You can expect to hear from us soon!</p>
              </div>
              
              <div class="footer">
                <p><strong>QuickMove AG</strong></p>
                <p>Premium Relocation Services Switzerland</p>
                <p>🌐 www.quickmove.ch</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;
      
      // Send email to admin
      await transporter.sendMail({
        from: '"QuickMove Quote System" <no-reply@toov.com.tr>',
        to: "admin@quickmove.ch",
        subject: `New Quote Request ${quoteId} - ${formData.firstName} ${formData.lastName}`,
        html: adminEmailHtml,
      });
      
      // Send confirmation email to customer
      await transporter.sendMail({
        from: '"QuickMove AG" <no-reply@toov.com.tr>',
        to: formData.email,
        subject: `Quote Request Confirmed - ${quoteId}`,
        html: customerEmailHtml,
      });
      
      res.json({ 
        success: true, 
        quoteId,
        message: "Quote request submitted successfully" 
      });
      
    } catch (error) {
      console.error("Quote submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit quote request" 
      });
    }
  });

  return httpServer;
}
